import { useState } from 'react'

import { Header, Main, Container, LeftSide, RightSide, Grid, RightBig, RightArrow } from './style'
import { GridItem } from '../components/GridItem'
import { levels, calculateImc } from '../helpers/imc'

import leftArrowImage from '../assets/leftarrow.png'

export function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)
  const [toShow, setToShow] = useState(null)

  function handleCalculateButton(event) {
    event.preventDefault()

    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert('Insira todos os campos')
    }
  }

  function handleBackButton() {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <Container>
      <Header>
        <p>|-🚀Feito by &copy; Murilo🚀-|</p>
      </Header>

      <Main>
        <LeftSide>
          <h1>Calcule seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <form action="">
            <input 
              type="number" 
              placeholder='Digite sua altura. Ex: 1.5 (em metros)'
              value={heightField > 0 ? heightField : ''}
              onChange={event => setHeightField(parseFloat(event.target.value))}
              disabled={toShow ? true : false}
            />

            <input 
              type="number" 
              placeholder='Digite seu peso. Ex: 75.3 (em kg)'
              value={weightField > 0 ? weightField : ''}
              onChange={event => setWeightField(parseFloat(event.target.value))}
              disabled={toShow ? true : false}
            />

            <button disabled={toShow ? true : false} onClick={handleCalculateButton}>Calcular</button>
          </form>

        </LeftSide>

        <RightSide>
          {!toShow && 
            <Grid>
              {
                levels.map((item, key) => (
                  <GridItem key={key} item={item}/>
                ))
              }
            </Grid>
          }

          {
            toShow && (
              <RightBig>
                <RightArrow onClick={handleBackButton}>
                  <img src={leftArrowImage} width={30} alt="Icon arrow" />
                </RightArrow>

                <GridItem item={toShow}/>
              </RightBig>
            )
          }
        </RightSide>
      </Main>
    </Container>
  )
}