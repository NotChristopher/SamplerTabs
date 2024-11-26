import styled from "styled-components";
import {View, Text, Pressable, Image} from 'react-native';


const Wrapper = styled(View)`
    margin-top:10px;
    padding-top: 10px;
    background : #BEBBBB;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const Row = styled(View)`
    flex-direction: row;
    gap: 6px;
    margin-bottom: 10px;
    alignSelf:center;
`;

const Pad = styled(Pressable)`
    height: 100px;
    width : 82px;
    backgroundColor : #BA3AFA;
    border-radius: 5px;
    
`;

const NavTouch = styled(Pressable)`
    height: 40px;
    width: 100px;
    backgroundColor: #810101;

`;




const PadsSection = () => {
    return (
        <Wrapper>
            <Row>
            <Pad style={({pressed}) => [{ backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 1')}>
                
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 2')}>
                
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 3')}>
                
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 4')}>
                
            </Pad>

            </Row>

            <Row>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 2')}>
              
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 2')}>
              
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 2')}>
              
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 2')}>
              
            </Pad>

            </Row>


            <Row>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 3')}>
               
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 3')}>
               
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 3')}>
               
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 3')}>
             
            </Pad>

            </Row>

            <Row>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 4')}>
               
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 4')}>
              
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 4')}>
            
            </Pad>
            <Pad style={({pressed}) => [{backgroundColor: pressed ? 'blue' : '#BA3AFA'}]} onPress={() => console.log('pressed 4')}>
                
            </Pad>

            </Row>

            <Row>

            </Row>
            <Row>
                <NavTouch>

                </NavTouch>
                <NavTouch>

                </NavTouch>
                <NavTouch>

                </NavTouch>
            </Row>
          
        </Wrapper>
    )
}

export default PadsSection