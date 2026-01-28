import './vocabTable.css';
import { businessWords, categories } from "../../data/BusinessVocabulary/words.ts";
import { tableTitles } from '../../data/BusinessVocabulary/tables.ts';



export default function VocabTable() {

    console.log(businessWords)

    return (
        <>
            <div className='title'>Vocabulary Table Component</div>
            
                {categories.map( (cat, index) => (
                    <>
                        <div className='category-container' key={index}>
                            <div className='category-name'>{cat}</div>
                        </div>
                        
                        
            <table>  
                <thead>
                    <tr>
                        { tableTitles.map((title, i) => <th key={i}>{title}</th>) }
                    </tr>
                </thead>
                <tbody>

                    { businessWords.filter(word=> word.category === cat)
                    .map((word) => (
                        <>
                           
                            <tr className='word-row' key={word.id}>
                                <td className={`en-word ${
                                    word.frequency.type === 'high' ? 'high-freq' :
                                    word.frequency.type === 'medium' ? 'med-freq' :
                                    word.frequency.type === 'low' ? 'low-freq' :
                                    word.frequency.type === 'rare' ? 'rare-freq' : ''
                                    }`}>
                                        {word.word}
                                </td>
                                <td className='meaning'>{word.meaning}</td>
                                <td className='defAr'>{word.defAr}</td>
                                <td className='defEn'>{word.defEn}</td>
                            </tr> 
                        </>
                        ))
                    }
                </tbody>
                
            </table>
                    </>
                    
                ))}
            

        </>
    )
}