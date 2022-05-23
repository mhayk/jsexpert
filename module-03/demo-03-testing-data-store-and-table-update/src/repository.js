import { writeFile, readFile } from 'node:fs/promises';

export const save = async (data) => {
    // with esmodules does not exist __filename, __dirname
    const { pathname: databaseFile } = new URL('../database.json', import.meta.url)
    const currentData = JSON.parse((await readFile(databaseFile)))
    currentData.push(data)

    await writeFile(databaseFile, JSON.stringify(currentData))
}