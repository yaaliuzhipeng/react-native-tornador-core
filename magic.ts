
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

    static take(
        obj: Record<any, any>,
        pros?: Array<string | number | [string, string[]]>,
    ) {
        let n = {};
        if (pros == undefined) return ({ ...obj });
        for (let p of pros) {
            if (typeof p == 'string' || typeof p == 'number') {
                n[p] = obj[p]
            } else {
                //{person:{name: 'example'}} | ['person','name']
                let [key, properties] = p;
                if (Array.isArray(properties) && properties.length > 0) {
                    let o = obj;
                    let itered = false;
                    for (let subp of properties) {
                        if (!itered) itered = true;
                        o = o[subp];
                        if (typeof o != 'object' || o == null) break;
                    }
                    if (itered == false) o = undefined;
                    n[key] = o;
                }
            }
        }
        return n;
    }
    static joinPath(...args: string[]) {
        let pr = []
        for (let p of args) {
            pr = pr.concat(p.split('/').filter((v) => v != ''))
        }
        return `/${pr.join('/')}`
    }
    static filename(path: string, withExt?: boolean) {
        let seg = path.split('/');
        if (seg.length < 1) {
            return ['', null]
        }
        let name = seg[seg.length - 1];
        if (withExt) {
            seg = name.split('.')
            if (seg.length > 1) {
                return [name, seg[seg.length - 1]]
            } else { // 0 | 1
                return [name, null]
            }
        } else {
            return [name, null]
        }
    }
}

export default magic