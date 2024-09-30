

export const getLocalStrogeData = () => {
    const savedData = localStorage.getItem('services')
    if (savedData) {
        return JSON.parse(savedData)
    }
    return []
}

export const setLocalStrogeData = (value) => {
    const savedData = getLocalStrogeData();
    console.log(savedData)
    savedData.push(value)
    localStorage.setItem("services",JSON.stringify(savedData))
}