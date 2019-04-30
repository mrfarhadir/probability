interface IProbablity {
    A: Array<any>
    S: Array<any>
}
export default class Probablity {
    singleChoose(A: Array<number>, S: Array<number>, config: any = {}): number {
        let _config = {
            decimals: 0,
            select: 1
        }

        config.decimals = config.decimals ? config.decimals : _config.decimals
        config.select   = config.select ? config.select : _config.select

        if (config.select === 1)
            return this.chooseOne(A, S, config)
        
        if (config.select > 1 )
            return this.chooseMore(A, S, config)
        
        return 0
    }
    private chooseMore(A: Array<number>, S: Array<number>, config: any): number {
        let p = 0
        let i = config.select
        let j = 0
        while(i) {
            let _p = (A.length - j)
            if (p === 0)
                p = _p
            else
                p *= _p
            i--
            j++
        }
        let allPossibleCases = this.factorial(S.length, S.length - config.select)
        p = (p / allPossibleCases)
        if (config.decimals)
            p = this.setDecimals(p, config.decimals)
        p = p < 0 ? 0 : p
        return p
    }
    private chooseOne(A: Array<number>, S: Array<number>, config: any): number {
        let p = A.length / S.length
        if (config.decimals)
            p = this.setDecimals(p, config.decimals)
        return p
    }
    multiChoose(A: Array<any>, S: Array<any>, config: any = {}): number {
        let _config = {
            decimals: 0,
            select: 1
        }

        config.decimals = config.decimals ? config.decimals : _config.decimals
        config.select   = config.select ? config.select : _config.select

        let allPossibleCases = 0
        S.map( s => {
            allPossibleCases += s.count
        })
        let p = 0
        const isArr = A instanceof Array;
        if (!isArr) {
            p = this.multiChooseOne(A, allPossibleCases, S, config)
        }
        if (A.length === 1) {
            p = this.multiChooseOne(A[0], allPossibleCases, S, config)
        }
        if (isArr && A.length > 1) 
            p = this.multiChooseMore(A, allPossibleCases, S, config)
        return p
    }
    private multiChooseMore(A: Array<any>, allPossibleCases: number, S: Array<any>, config: any): number {
        let p = 1
        A.forEach( (_A, i) => {
            if (i > 0)
                allPossibleCases -= i * A[i-1].count
            let _p = this.multiChooseOne(_A, allPossibleCases, S, config)
            p *= _p
        })
        return p
    }
    private multiChooseOne(A: any, allPossibleCases: number, S: Array<any>, config: any): number {
        let p = 1
        let c = A.count
        let i = 0
        let SelectionTotalValue = S.filter(s => s.name == A.name)[0]['count']
        while(c) {
            let _p = (SelectionTotalValue - i) / (allPossibleCases - i)
            p = p * _p
            c--;
            i++;
        }
        return p
    }
    private factorial(n: number, til: number = 0) {
        let s = 1
        while(n > til) s *= n--
        return s
    }
    private setDecimals(n: number, decimals: number) {
        return parseFloat(n.toFixed(decimals))
    }
}

