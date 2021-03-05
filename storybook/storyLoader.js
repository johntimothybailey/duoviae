// TODO use https://github.com/elderfo/react-native-storybook-loader.git

function loadStories () {
  require('../app/components/Container/stories')
  require('../app/components/Questions/stories')
  require('../app/components/Answers/stories')
  require('../app/components/AppBar/stories')
  require('../app/components/BottomBar/stories')
  require('../app/components/Screen/stories')
}

module.exports = {
  loadStories
}
