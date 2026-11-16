import SectionHead from './SectionHead';
import Icon from './Icons';
import { compareRows } from '@/lib/content';

const iconFor = { yes: 'check', partial: 'minus', no: 'cross' };
const wordFor = { yes: 'Yes', partial: 'Partly', no: 'No' };

function Cell({ value, strong }) {
  const [state, note] = value;
  return (
    <td className={strong ? 'is-us' : undefined}>
      <span className={`mark mark-${state}`}>
        <Icon name={iconFor[state]} size={12} strokeWidth={2.4} />
      </span>
      <span className="sr-only">{wordFor[state]}: </span>
      <span>{note}</span>
    </td>
  );
}

export default function Compare({ heading = true }) {
  return (
    <section className="section compare" id="why" aria-labelledby="compare-title">
      <div className="wrap">
        {heading ? (
          <SectionHead
            id="compare-title"
            label="Why SkyTravex"
            line="What you are choosing between."
            accent="Side by side."
            text="Most agencies start on supplier portals and spreadsheets, then try a generic booking script. This is how the three compare on the work that fills your day."
          />
        ) : (
          <h2 id="compare-title" className="sr-only">
            Comparison
          </h2>
        )}

        <div className="compare-scroll" data-reveal>
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">Capability</th>
                <th scope="col" className="is-us">
                  <span className="compare-us chase">SkyTravex</span>
                </th>
                <th scope="col">Supplier portals and spreadsheets</th>
                <th scope="col">Generic booking script</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.cap}>
                  <th scope="row">{row.cap}</th>
                  <Cell value={row.us} strong />
                  <Cell value={row.portals} />
                  <Cell value={row.script} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
