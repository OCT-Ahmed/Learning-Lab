import './vocabTable.css';
import { useState, Fragment, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { businessWords, categories } from "../../data/BusinessVocabulary/words";
import { tableTitles } from '../../data/BusinessVocabulary/tables';
import { Search } from 'lucide-react';


export default function VocabTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [ confirmedQuery, setConfirmedQuery ] = useState('');
    const [ FilteredQuery, setFilteredQuery ] = useState<typeof businessWords>([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [allowClear, setAllowClear] = useState<boolean>();

    const currentCategory = searchParams.get('cat');




    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value.trim());
    };

    const handleSearchQuery = () => {
        const param = new URLSearchParams(searchParams);
        const query = searchTerm.toLowerCase();
        setConfirmedQuery(query);
        const results = businessWords.filter(word => { return word?.word?.toLowerCase().includes(query);
        });

          if (query) {
            param.set('query', query);
            setFilteredQuery(results);
            setConfirmedQuery(query);
            setSearchParams(param);
          } else {
            param.delete('query');
            setSearchParams({});
          };
        (results && results.length > 0) ? console.log(`Results: ${results.length}`) : console.log('not found');
        
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setAllowClear(true);
        const param = new URLSearchParams(searchParams);
        param.delete('query');
        param.set('cat', e.target.value);
        setSearchParams(param);        
    };
    console.log(searchTerm);

    return (
        <>
            <div className='search-nav'>
                {/* SEARCH INPUT */}
                <div className='search-box'>
                    <button className='search-icon' onClick={handleSearchQuery}>
                        <Search size={20} />
                    </button>
                    <input 
                    type="text" 
                    className="search-input"
                    name="search-input"
                    placeholder="Search for words..."
                    onChange={handleSearchChange}
                    value={allowClear ? '' : searchTerm}
                     />
                </div>
                {/* FILTER CATEGORY SELECT */}
            
                <div className='filter-box'>
                    <span>Category</span>
                    <select className='select-category' onChange={handleCategoryChange}>
                        <option value={'All'}>All</option>         
                        {categories.map(cat => (
                            <option value={cat} key={cat}> 
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div> 

        {/* SHOW SEARCHED WORDS */}

        { 
            (searchParams.get('query') && FilteredQuery.length > 0) ?

                categories.filter(cat => FilteredQuery.some(word => word.category === cat) )
                    .map( (cat) => (
                    <Fragment key={cat}>
                    <section className={`${cat}-section`}>
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
                                { FilteredQuery
                                .filter(word => word.category === cat)
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
                </Fragment>)) 
            : (searchParams.get('query') && FilteredQuery.length < 1) ? (
                <div className='no-results-content'>
                    <h3>No results of {confirmedQuery}</h3>
                    <p>Make sure you type the correct word or go back to the words</p>
                    <button className="reset-query-param-btn" onClick={() => {
                        const param = new URLSearchParams(searchParams);
                        param.delete('query');
                        setSearchParams(param);
                        }}>
                        Show Words
                    </button>
                </div>) 
            
            : 
            // {/* SHOW SELECTED CATEGORY */}
                (currentCategory && currentCategory !== 'All') ? 
                    categories.filter(cat => currentCategory === cat).map((cat) => (
                <Fragment key={cat}>
                    <section className={`${cat}-section`}>
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
                </Fragment>)) 
                    
            :
                categories.map( (cat) => (
                <Fragment key={cat}>
                    <section className={`${cat}-section`}>
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
                </Fragment>)) 
            }
        </>
    )
}