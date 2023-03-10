export const levels = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },
]

export const calculateImc = (height, weight) => {
    const array = String(height).split("")
    
    if (array.includes('.')) {
        const imc = weight / (height * height)

        for (const i in levels) {
            if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
                let levelCopy = {...levels[i]}
                
                levelCopy.yourImc = imc.toFixed(2)
                return levelCopy
            }
        }
    
        return null
        
    } else {
        const imc = (weight / (height / 100) ** 2)

        for (const i in levels) {
            if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
                let levelCopy = {...levels[i]}
                
                levelCopy.yourImc = imc.toFixed(2)
                return levelCopy
            }
        }
    
        return null
    }
}   