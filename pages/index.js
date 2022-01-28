import { Box, Text, TextField, Image } from '@skynexui/components';
import { Button, Title, Label} from '../components'
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

// function Title(props){
    
//     const Tag = props.tag || 'h1';
//     // console.log('Props: ', props);
//     // console.log('Tag: ', props.tag)
//     return (
//         <>
//             <Tag>{props.children}</Tag>
//             <style jsx>{`
//             ${Tag} {
//             color: ${appConfig.theme.colors.neutrals['500']};
//             font-size: 24px;
//             font-weight: 600;
//                 }
//             `}</style>
//         </>
//     );
// }

// function HomePage() {
//     return (
//     <div>
//         <GlobalStyle />
//         <Title tag="h1">Boas vindas de volta!</Title> 
//         <h2>Discord - AluraMatrix</h2>
//     </div>
//     );//fechando o return
// }
// export default HomePage

export default function PaginaInicial() {
    // const username = 'albertojuniorhc';
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();
    const [disableBtn, setDisableBtn] = React.useState(true);

    const handleOnChange = (event) => {
      (event.target.value.length >= 3) ? setDisableBtn(false) : setDisableBtn(true);
      setUsername(event.target.value);
    }

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={ (event) => {
                  event.preventDefault();
                  roteamento.push('/chat')
                }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title
                tag='h1'
                theme={appConfig.theme}
                >
                  Boas vindas de volta!
              </Title>
              
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              <Label
              theme={appConfig.theme}
              id='oi123'
              >Oi</Label>
              
              {/* <input 
              type="text"
              value={username}
              onChange={function (event){
                  console.log(event.target.value);
                  //Onde está o value?
                  const valor = event.target.value // "event" vem do navegador.
                  setUsername(event.target.value);
              }}
              /> */}

              <TextField
                value={username}
                // onChange={(event) => {
                //      handleOnChange(event)
                // }}
                onChange={handleOnChange} // <== iSSO FUNCIONA IGUAL AS 3 LINHAS ACIMA,
              
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button 
                type='submit'
                label='Entrar'
                disabled={disableBtn}
                fullWidth
                theme={appConfig.theme}
                data-js='nath'
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }