fs() {
  case "$PWD" in
    "$HOME/Developer/nodewave/full-stack-open"/*)
      code -r src/App.jsx src/main.jsx
      ;;
    *)
      echo "Run this inside a Full Stack Open app."
      ;;
  esac
}