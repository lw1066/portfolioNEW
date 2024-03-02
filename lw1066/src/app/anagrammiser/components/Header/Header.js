import Image from 'next/image';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
          <Image
        src="/anagrammiser/assets/alphabetSoup.jpeg" 
        alt="Alphabet Soup" 
        width={150} 
        height={150}
      />
        <div>
        <h1>The Anagrammiser</h1>
        <h2>Solve anagrams - visualise, check words in a dictionary or cheat...</h2>
        </div>
      </header>

    );
};

export default Header;