import styled from "styled-components";
import {Text, View, Pressable} from 'react-native';


const Wrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding: 13px;
    border-raduis: 5px;
    background: grey;
    margin-bottom: 10px;
`;

const PlaybackPress = styled(Pressable)`
    width: 70px;
    height: 40px;
    background: red;
`;

const TopController = () => {

    return (
        <Wrapper>
            <PlaybackPress>

           </PlaybackPress>
           <PlaybackPress></PlaybackPress>
           <PlaybackPress></PlaybackPress>
           <PlaybackPress></PlaybackPress>
        </Wrapper>

    )
}
export default TopController;