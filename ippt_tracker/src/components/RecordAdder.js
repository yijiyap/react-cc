import { useState } from 'react';

export function RecordAdder() {
    const [pushups, setPushups] = useState('');
    const [situps, setSitups] = useState('');
    const [runMinutes, setRunMinutes] = useState('');
    const [runSeconds, setRunSeconds] = useState('');

    function handleAddRecord() {
        // Create record
    }

  return (
    <div>
        <h2>Add IPPT Entry</h2>
        <form>
            <div>
                <h3><label htmlFor='pushups'>Pushups</label></h3>
                <input id='pushups' type='number' value={pushups} onChange={(e)=>setPushups(e.target.value)}/> reps
            </div>
            <div>
                <h3><label htmlFor='situps'>Situps</label></h3>
                <input id='situps' type='number' value={situps} onChange={(e)=>setSitups(e.target.value)}/> reps
            </div>
            <div>
                <h3>2.4km run</h3>
                <input id='minutes' type='number' value={runMinutes} onChange={(e)=>setRunMinutes(e.target.value)} style={{width:'50px'}}/>
                <label htmlFor='minutes'>min</label>
                <input id='seconds' type='number' value={runSeconds} onChange={(e)=>setRunSeconds(e.target.value)} style={{width:'50px'}}/>
                <label htmlFor='seconds'>s</label>
            </div>
            <div style={{margin: '20px'}}>
                <button onClick={handleAddRecord()}>Add Record</button>
            </div>
        </form>
    </div>
  );
}