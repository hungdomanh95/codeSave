# Create new appp

  -npx react-native init AwesomeProject

# USE PROPS IN CSS

  const testComponent = (props) => {

    const styles = styleWithProps(props)

    return (...)

  }

  const styleWithProps = (props) =>(

    StyleSheet.create({

      style:{

        backgroundColor:props.color || "#2679f1",

    }}))

  export default testComponent

