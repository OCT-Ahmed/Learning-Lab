import './vocabTable.css';
import { businessWords, categories } from "../../data/BusinessVocabulary/words.ts";
import { tableTitles } from '../../data/BusinessVocabulary/tables.ts';
import { Fragment } from 'react';



export default function VocabTable() {

    console.log(businessWords)

    return (
        <>
            <div className='title'>Vocabulary Table Component</div>
            
            {categories.map( (cat) => (
                <Fragment key={cat}>
                    <section key={cat} className={`${cat}-section`}>
                        {/* CATEGORY LINE */}
                        <div className='category-container'>
                            <div className='category-name'>{cat}</div>
                        </div>
                        {/* WORDS TABLE */}
                        <div className=''>
                            <table className='fixed-table'>  
                            {/* TABLE HEAD */}
                            <thead>
                                <tr>
                                    { tableTitles.map((title, i) => <th key={i}>{title}</th>) }
                                </tr>
                            </thead>
                            {/* TABLE BODY */}
                            <tbody>
                                { businessWords
                                .filter(word=> word.category === cat)
                                .map((word) => (    
                                        <tr className='word-row' key={word.id}>
                                            <td className={`en-word ${word.frequency.type}-freq`}>
                                                    {word.word}
                                            </td>
                                            <td className='meaning'>{word.meaning}</td>
                                            <td className='defAr'>{word.defAr}</td>
                                            <td className='defEn'>{word.defEn}</td>
                                        </tr>  
                                    ))
                                }
                            </tbody>
                            </table>
                        </div>
                    </section>
                </Fragment>
                
            ))}
        </>
    )
}