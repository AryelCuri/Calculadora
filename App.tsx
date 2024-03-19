import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';



export default function App() {
  const [valor, setValor] = useState('0')
  const [historico, setHistorico] = useState<string[]>([]) 
  const teclado = [
    ['AC', 'DEL', ' ', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    [' ', '0', '.', '=']
  ]
   

  return (
    <View style={styles.container}>
      <View>
        <View style= {{alignItems:'flex-end', marginBottom: 16}}>
          <Text variant='titleLarge'>
            {valor}
          </Text>
        </View>

        <View style={styles.teclado}>
          {
            teclado.map((linha: string[]) => {
              return (
                <View style={styles.linha}>
                  {
                    linha.map((coluna: string) => {
                      if (coluna === 'AC') {
                        return (
                          <View style={styles.coluna}>
                            <Button mode="elevated" onPress={() => setValor('0')}>
                              {coluna}
                            </Button>
                          </View>
                        )
                      }
                      if (coluna === 'DEL') {
                        return (
                          <View style={styles.coluna}>
                            <Button mode="elevated" onPress={() => setValor(valor.slice(0, valor.length - 1))}>
                              {coluna}
                            </Button>
                          </View>
                        )
                      }
                      if (coluna === '=') {
                        return (
                          <View style={styles.coluna}>
                            <Button mode="contained" onPress={() => setValor(`${eval(valor)}`)}>
                              {coluna}
                            </Button>
                          </View>
                        )
                      }
                      return (
                        <View style={styles.coluna}>
                          <Button mode="text" onPress={() => {
                            if(coluna === ' ') return
                            console.log(valor)


                            if(coluna === '+' && valor.charAt(valor.length-1) === '') return
                            if(coluna === '/' && valor.charAt(valor.length-1) === '') return
                            if(coluna === '*' && valor.charAt(valor.length-1) === '') return
                            if(coluna === '-' && valor.charAt(valor.length-1) === '') return
                            if(coluna === '.' && valor.charAt(valor.length-1) === '') return

                            if(coluna === '+' && valor.charAt(valor.length-1) === '+') return
                            if(coluna === '/' && valor.charAt(valor.length-1) === '/') return
                            if(coluna === '*' && valor.charAt(valor.length-1) === '*') return
                            if(coluna === '-' && valor.charAt(valor.length-1) === '-') return
                            if(coluna === '.' && valor.charAt(valor.length-1) === '.') return
                            
                            if(coluna === '/' && valor.charAt(valor.length-1) === '+') return
                            if(coluna === '*' && valor.charAt(valor.length-1) === '+') return
                            if(coluna === '-' && valor.charAt(valor.length-1) === '+') return
                            if(coluna === '.' && valor.charAt(valor.length-1) === '+') return

                            if(coluna === '+' && valor.charAt(valor.length-1) === '/') return
                            if(coluna === '*' && valor.charAt(valor.length-1) === '/') return
                            if(coluna === '-' && valor.charAt(valor.length-1) === '/') return
                            if(coluna === '.' && valor.charAt(valor.length-1) === '/') return

                            if(coluna === '/' && valor.charAt(valor.length-1) === '-') return
                            if(coluna === '*' && valor.charAt(valor.length-1) === '-') return
                            if(coluna === '+' && valor.charAt(valor.length-1) === '-') return
                            if(coluna === '.' && valor.charAt(valor.length-1) === '-') return

                            if(coluna === '/' && valor.charAt(valor.length-1) === '*') return
                            if(coluna === '+' && valor.charAt(valor.length-1) === '*') return
                            if(coluna === '-' && valor.charAt(valor.length-1) === '*') return
                            if(coluna === '.' && valor.charAt(valor.length-1) === '*') return

                            if(coluna === '/' && valor.charAt(valor.length-1) === '.') return
                            if(coluna === '*' && valor.charAt(valor.length-1) === '.') return
                            if(coluna === '-' && valor.charAt(valor.length-1) === '.') return
                            if(coluna === '+' && valor.charAt(valor.length-1) === '.') return

                            const historicoTemp: string[] = historico //recupera o valor do historico
                            historicoTemp.unshift(valor.concat('=', eval(valor))) // adiciona uma equação no começo do historico/lista
                            if(historicoTemp.length > 5) historicoTemp.pop() //se o historico for > 5 tira o ultimo elemento da lista
                            setHistorico(historicoTemp) // define o novo valor do historico

                            // if ternário
                            setValor(valor === '0' && // condição
                                     coluna !== '+' &&
                                     coluna !== '-' &&
                                     coluna !== '*' &&
                                     coluna !== '/' &&
                                     coluna !== '.'
                                      ? coluna // verdadeiro
                                      : valor.concat(coluna)) // falso
                          }}>
                            {coluna}
                          </Button>
                        </View>
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>
      </View>






    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teclado: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linha: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  coluna: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
