import Navbar from '../components/Navbar'
import styled from 'styled-components'
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp'


const Information = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;  
  font-size: 20pt;
`;



export default function Home() {
  return (
    <div className = "container">
      <Navbar />
      <Information>
          Stay on top of the cryptocurrency markets with Kryptme
          
      </Information>

      
    </div>
  )
}
