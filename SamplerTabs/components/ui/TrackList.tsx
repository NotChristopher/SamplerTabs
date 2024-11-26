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

const TrackList = () => {

    return(
        <Wrapper>
            <Row>
                <Pad>

                </Pad>
                <Pad>

                </Pad>
                <Pad>

                </Pad>
            </Row>
            <Row>
                <Pad>

                </Pad>
                <Pad>

                </Pad>
                <Pad>

                </Pad>
            </Row>
            <Row>
                 <Pad>

                </Pad>
                <Pad>

                </Pad>
                <Pad>

                </Pad>
            </Row>
        </Wrapper>

    )
}

export default TrackList;