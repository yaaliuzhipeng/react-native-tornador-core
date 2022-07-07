
class magic {

    /**
     * @param it 遍历的数组
     * @param pr 预测、返回true则表示符合条件、并结束遍历
     * @param reverse 逆向遍历、从末尾开始
     * @returns item,index
     */

    static findIt(it: Array<any>, pr: (item: any) => boolean, reverse?: boolean) {
        let nil = [null, -1]
        if (!Array.isArray(it)) {
            return nil
        }
        if (reverse) {
            let start = it.length - 1;
            if (start < 0) return nil;
            for (let i = start; i >= 0; i--) {
                if (pr(it[i])) return [it[i], i]
            }
        }
        for (let i = 0; i < it.length; i++) {
            if (pr(it[i])) return [it[i], i]
        }
        return nil
    }

    /**
     * 遍历数组、找到符合条件的item的数量
     */
    static countIt(it: Array<any>, pr: (item: any, index: number) => boolean): number {
        let c = 0;
        for (let i = 0; i < it.length; i++) {
            let item = it[i];
            if (pr(item, i)) {
                c += 1;
            }
        }
        return c;
    }
}

export default magic