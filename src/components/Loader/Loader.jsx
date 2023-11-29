import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }>
      <ThreeCircles color='#3f51b5' width={800} height={800} />
    </div >
  )
}

export default Loader
