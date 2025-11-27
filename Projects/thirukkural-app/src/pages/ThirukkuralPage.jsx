import React, { useState } from 'react'
import { single_kural } from '../api/getKurals'
import Kural from '../components/Kural'
import "./ThirukkuralPage.css"
import thiruvalluvar from "../assets/images/thiruvalluvar.png"
export default function ThirukkuralPage() {

    const [kuralNum, setKuramNum] = useState()
    const [kural, setKural] = useState(null)
    const [loading, setLoading] = useState(false)

    if (loading) return <p className="loading">Loading...</p>

    return (
        <div className='kural-page'>
            <img src={thiruvalluvar}></img>
            <div className="kural-fetch-card">

                <input
                    type="number"
                    value={kuralNum}
                    onChange={(e) => setKuramNum(e.target.value)}
                    placeholder="Enter Kural Number"
                />
                <button onClick={async () => {
                    setLoading(true)
                    const res = await single_kural(kuralNum);
                    setKural(res);
                    setLoading(false)
                    setKuramNum()
                }}>
                    Fetch
                </button>
            </div>

            {
                kural && <Kural data={kural} />
            }
        </div>
    )
}
