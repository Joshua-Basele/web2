const HomePage = () => {
    return(
        <div>
            <h1 style={{ textAlign: 'center', ...titreTextStyle }}>Bienvenue sur iMovies !</h1>
            <p style={{textAlign: 'center', ...introTextStyle}}>iMovies est une application où vous pouvez découvrir les films actuellement projetés dans les cinémas UGC, ainsi que vos films préférés.</p>
        </div>
    )
}

const titreTextStyle = {
    paddingTop: '200px'
  };

const introTextStyle = {
    fontSize: '1.2rem',
    padding: '80px',
    color: '#777',
    fontWeight: 'bold',
  };
  

export default HomePage;