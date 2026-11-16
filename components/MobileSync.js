import SectionHead from './SectionHead';
import Icon from './Icons';

const states = ['On hold', 'Paid', 'Ticketed'];

function StatusCycle() {
  return (
    <span className="status-cycle" aria-hidden="true">
      {states.map((state, index) => (
        <span key={state} className={`pill status-${index}`}>
          {state}
        </span>
      ))}
    </span>
  );
}

export default function MobileSync() {
  return (
    <section className="section sync" id="mobile" aria-labelledby="sync-title">
      <div className="wrap sync-grid">
        <div>
          <SectionHead
            id="sync-title"
            align="left"
            label="On every screen"
            line="The desk goes"
            accent="where the agent goes."
            text="The portals are built for the phone as well as the desktop. An agent can quote from the counter, take payment on the road and see the ticket arrive in both places."
          />
          <ul className="check-list">
            <li data-reveal style={{ '--i': 0 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>One account everywhere.</strong> Start a booking on the laptop, finish it on the phone.
              </span>
            </li>
            <li data-reveal style={{ '--i': 1 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>Alerts that matter.</strong> Booking, payment and status changes by email and SMS.
              </span>
            </li>
            <li data-reveal style={{ '--i': 2 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>Safe sign-in.</strong> One-time codes, session control and IP restriction for staff accounts.
              </span>
            </li>
          </ul>
        </div>

        <div className="sync-visual" data-reveal="right" aria-hidden="true">
          <div className="window sync-desktop">
            <div className="window-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="window-title">agents.youragency.com</span>
            </div>
            <div className="sync-card">
              <small>Booking SKX-48213</small>
              <b>Dhaka to Dubai</b>
              <span>2 adults, 14 March</span>
              <StatusCycle />
            </div>
            <div className="sync-lines">
              <i />
              <i />
              <i />
            </div>
          </div>

          <span className="sync-link">
            <i />
            <i />
            <i />
          </span>

          <div className="phone">
            <span className="phone-notch" />
            <div className="phone-screen">
              <small>SKX-48213</small>
              <b>DAC to DXB</b>
              <span>2 adults, 14 March</span>
              <StatusCycle />
              <div className="phone-toast">
                <Icon name="check" size={12} strokeWidth={2.4} /> Synced
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
