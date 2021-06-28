- # CREATE NEW APP
  ```
  - npx react-native init AwesomeProject
  ```
- # USE PROPS IN CSS

  ```
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
  ```

- # Gradlew

  -- Error: spawn ./gradlew EACCES

  -- ./gradlew app:installDebug -PreactNativeDevServerPort=8081S

  ---> run at terminal

  ```
  chmod 755 android/gradlew
  ```
- # OPEN METRO BY ITERM2

  -- Open $PROJECT/node_modules/react-native/scripts/launchPackager.command

  -- Right click launchPackager.command

  -- Get Infor -> openWidth -> ITERM 2