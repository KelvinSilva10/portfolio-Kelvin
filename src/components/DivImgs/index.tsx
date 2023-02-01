import { Flex, Image, keyframes } from '@chakra-ui/react';
import BolaAzul from '../../assets/bola-azul.svg';
import Retangulo2 from '../../assets/retangulosd.svg';
import Engrenagem from '../../assets/engrenagem.svg';

const animationRetangules = keyframes`
  0% { transform: scale(1) ;  opacity:0.4}
  25% { transform: scale(0.95) ;  opacity:0.7 }
  50% { transform: scale(0.9) ;  opacity:0.5}
  75% { transform: scale(0.95) ; opacity:0.7}
  100% { transform: scale(1) ;  opacity:0.4}
`;

const animationEngrenagem = keyframes`
  0% { transform: rotate(0) ;  }
  25% { transform: rotate(90deg) ;   }
  50% { transform: rotate(180deg) ;  }
  75% { transform:rotate(270deg) ; }
  100% { transform: rotate(360deg) ;  }
`;

const animation2 = `${animationRetangules} 30s linear infinite`;
const animation3 = `${animationEngrenagem} 5s linear infinite`;

// eslint-disable-next-line arrow-body-style
export const DivImgs = () => {
  return (
    <Flex
      justify='center'
      align='center'
      opacity={['0.5', '0.5', '1', '1']}
      w={['100%', '100%', '100%', '50%']}
      h='100vh'
      position={['absolute', 'absolute', 'absolute', 'relative']}
      zIndex='11'
      overflowY='hidden'
    >
      <Image
        src={BolaAzul}
        position='relative'
        objectFit='cover'
        h='100vh'
        maxW={['100vw', '100vw', '100%', '100%']}
      />
      <Image
        src={Engrenagem}
        animation={animation3}
        position='absolute'
        zIndex='1'
        top='40%'
        right='80%'
      />
      <Image
        src={Engrenagem}
        animation={animation3}
        position='absolute'
        zIndex='1'
        top='80%'
        right='40%'
      />
      <Image
        src={Engrenagem}
        animation={animation3}
        position='absolute'
        zIndex='1'
        top='30%'
        right='34%'
      />

      <Image
        src={Retangulo2}
        animation={animation2}
        position='absolute'
        opacity='1'
      />
    </Flex>
  );
};
