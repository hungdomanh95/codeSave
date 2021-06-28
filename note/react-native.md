- # CREATE NEW APP
  ```
  - npx react-native init AwesomeProject
  ```
- # BUILD APP ANDROID
  ```
  - rm -rf ./android/app/src/main/res/raw && rm -rf ./android/app/src/main/res/drawable-*

  - "clean": "cd android && ./gradlew clean && cd ..",

  - "bundle": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output \tandroid/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",

  - "apk:release": "cd android && ./gradlew clean && ./gradlew app:assembleRelease && cd ..",

  - "aab:release": "cd android && ./gradlew clean && ./gradlew bundleRelease && cd ..",

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
- # FIX ERR FLIPPER
  ```
  use_flipper!({ 'Flipper-Folly' => '2.5.3', 'Flipper' => '0.87.0', 'Flipper-RSocket' => '1.3.1' })
   post_install do |installer|
     react_native_post_install(installer)
     installer.pods_project.build_configurations.each do |config|
        config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
          end
   end
  ```

