import { Main, GridImageIcon, GridTitle, GridInfo, YourImc } from './style'

import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

export function GridItem({ item }) {
    return (
        <Main style={{background: item.color}}>
            <GridImageIcon>
                <img src={item.icon === 'up' ? upImage : downImage} width={30} alt="icon" />
            </GridImageIcon>

            <GridTitle>{item.title}</GridTitle>

            {
                item.yourImc && (
                    <YourImc>Seu IMC é de {item.yourImc} kg/m²</YourImc>
                )
            }

            <GridInfo>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </GridInfo>
        </Main>
    )
}