import { ViroScene, ViroText } from "@viro-community/react-viro";

const ARVisualisationComponent = (props)=>{


  return( <ViroScene>
    <ViroText text="Hello World" position={[0, -.1, -1]} />
  </ViroScene>)
}

export default ARVisualisationComponent
