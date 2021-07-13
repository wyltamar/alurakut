import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AluraKutMenu } from '../src/lib/aluraKutCommons';

function ProfileSideBar(properties) {
  return (
    <Box>
      <img
        src={`https://github.com/${properties.propUser}.png`}
        alt="Foto do Wyltamar"
        style={{ borderRadios: '8px' }}
      />
    </Box>
  );
}

export default function Home() {
  const user = 'wyltamar';
  //prettier-ignore
  return (
  <>  
  <AluraKutMenu/>
  <MainGrid>
    <div  className="profileArea" style={{gridArea: "profileArea"}}>
      <ProfileSideBar propUser={user}/>
    </div>
    <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
    <Box>
    Bem vindo
    </Box>
    </div>
    <div className="profileRelacionsArea" style={{gridArea: "profileRelationsArea"}}>
    <Box >
    Pessoas da comunidade
    </Box>
    </div>

  </MainGrid>
  </>
  );
}
