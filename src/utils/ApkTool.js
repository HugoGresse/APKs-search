import path from 'path'
import {exec} from 'child_process'

export const decompile = async (source, output) => {
    return new Promise((resolve, reject) => {

        source = path.resolve(source)
        output = path.resolve(output)

        try {
            exec(`apktool decode -c --output=${output} ${source}`, (err) => {
                if (err) return reject(err)
                resolve(output)
            })
        } catch (err) {
            reject(err)
        }
    })
}
