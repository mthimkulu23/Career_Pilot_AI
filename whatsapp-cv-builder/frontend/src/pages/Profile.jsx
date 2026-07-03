import React, { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Download, FileText, User, Sparkles, BookOpen, Briefcase } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [hustles, setHustles] = useState(null);
  const [careerPath, setCareerPath] = useState(null);
  const [uploadedCv, setUploadedCv] = useState([]);
  const [generatedCvs, setGeneratedCvs] = useState([]);

  const emailKey = useMemo(() => user?.email, [user]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const p = localStorage.getItem(`profile_${emailKey}`);
        const j = localStorage.getItem(`jobs_${emailKey}`);
        const h = localStorage.getItem(`hustles_${emailKey}`);
        const c = localStorage.getItem(`careerPath_${emailKey}`);

        if (p) setProfile(JSON.parse(p));
        if (j) setJobs(JSON.parse(j));
        if (h) setHustles(JSON.parse(h));
        if (c) setCareerPath(JSON.parse(c));

        // Attempt to load CV-related artifacts.
        // Current codebase may not yet store these; we support common shapes.
        const uploaded = localStorage.getItem(`uploaded_cvs_${emailKey}`);
        const generated = localStorage.getItem(`generated_cvs_${emailKey}`);
        const uploadedFallback = localStorage.getItem(`cv_${emailKey}`);
        const generatedFallback = localStorage.getItem(`generatedCv_${emailKey}`);

        const normalizeList = (value) => {
          if (!value) return [];
          try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) return parsed;
            if (parsed && typeof parsed === 'object') return [parsed];
            return [];
          } catch {
            // If stored as a plain filename
            return [{ fileName: String(value), createdAt: null }];
          }
        };

        setUploadedCv(normalizeList(uploaded) || (uploadedFallback ? normalizeList(uploadedFallback) : []));
        setGeneratedCvs(normalizeList(generated) || (generatedFallback ? normalizeList(generatedFallback) : []));
      } catch (e) {
        console.error('Failed to load profile page data', e);
      } finally {
        setLoading(false);
      }
    };

    if (emailKey) load();
  }, [emailKey]);

  const Section = ({ title, icon, children }) => (
    <section className="profile-section">
      <div className="profile-section-title">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="profile-section-body">{children}</div>
    </section>
  );

  const renderCvItem = (item, idx) => {
    const fileName = item?.fileName || item?.name || item?.filename || `CV ${idx + 1}`;
    const createdAt = item?.createdAt || item?.date || null;
    const downloadUrl = item?.url || item?.downloadUrl || null;

    return (
      <div key={idx} className="cv-item">
        <div className="cv-meta">
          <div className="cv-icon">
            <FileText size={18} />
          </div>
          <div className="cv-text">
            <div className="cv-name">{fileName}</div>
            <div className="cv-sub">{createdAt ? new Date(createdAt).toLocaleString() : '—'}</div>
          </div>
        </div>

        {downloadUrl ? (
          <a className="cv-download" href={downloadUrl} target="_blank" rel="noreferrer">
            <Download size={16} />
            <span>Download</span>
          </a>
        ) : (
          <div className="cv-download disabled" title="No download URL available">
            <Download size={16} />
            <span>Unavailable</span>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="loading-state">
          <div className="spinner" />
          <p>Loading your profile...</p>
        </div>
        <style>{`
          .profile-page { padding: 2rem; max-width: 1200px; margin: 0 auto; }
          .loading-state { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; color: var(--text-secondary); }
          .spinner { width: 42px; height: 42px; border: 3px solid rgba(99, 102, 241, 0.3); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <header className="profile-hero">
        <div className="profile-hero-left">
          <div className="profile-hero-icon">
            <User size={20} />
          </div>
          <div>
            <h1 className="profile-hero-title">Your Profile</h1>
            <p className="profile-hero-sub">Uploaded CVs, generated CVs, and your career information.</p>
          </div>
        </div>
      </header>

      <div className="profile-grid">
        <Section title="Uploaded CV" icon={<Sparkles size={18} />}>
          {uploadedCv.length ? (
            <div className="cv-list">{uploadedCv.map(renderCvItem)}</div>
          ) : (
            <div className="empty-panel">
              <p>No uploaded CV found.</p>
              <p className="muted">Upload/update your CV from the dashboard.</p>
            </div>
          )}
        </Section>

        <Section title="Generated CVs" icon={<BookOpen size={18} />}>
          {generatedCvs.length ? (
            <div className="cv-list">{generatedCvs.map(renderCvItem)}</div>
          ) : (
            <div className="empty-panel">
              <p>No generated CVs found.</p>
              <p className="muted">Generate CVs using the CV builder flow (if enabled).</p>
            </div>
          )}
        </Section>

        <Section title="Other Information" icon={<Briefcase size={18} />}>
          {profile ? (
            <div className="other-info">
              <div className="other-info-row">
                <span className="other-label">Name</span>
                <span className="other-value">{profile.name || `${user?.name || ''} ${user?.surname || ''}`.trim()}</span>
              </div>
              <div className="other-info-row">
                <span className="other-label">Experience</span>
                <span className="other-value">{profile.experience || '—'}</span>
              </div>
              <div className="other-info-row">
                <span className="other-label">Dominant Sector</span>
                <span className="other-value">{profile.dominantSector || '—'}</span>
              </div>
              <div className="other-info-row">
                <span className="other-label">Work Style</span>
                <span className="other-value">{profile.workStyle || '—'}</span>
              </div>
              <div className="other-info-row">
                <span className="other-label">Payment Preference</span>
                <span className="other-value">{profile.preferredPayment || '—'}</span>
              </div>

              <div className="other-divider" />

              <div className="other-info-row">
                <span className="other-label">Matched Jobs</span>
                <span className="other-value">{Array.isArray(jobs) ? jobs.length : '0'}</span>
              </div>
              <div className="other-info-row">
                <span className="other-label">Side Hustles</span>
                <span className="other-value">{Array.isArray(hustles) ? hustles.length : '0'}</span>
              </div>
              <div className="other-info-row">
                <span className="other-label">5-Year Plan Steps</span>
                <span className="other-value">{Array.isArray(careerPath) ? careerPath.length : '0'}</span>
              </div>

              {Array.isArray(profile.skills) && profile.skills.length > 0 && (
                <>
                  <div className="other-divider" />
                  <div className="skills-mini">
                    <div className="skills-mini-title">Top Skills</div>
                    <div className="skills-mini-grid">
                      {profile.skills.slice(0, 10).map((s, idx) => (
                        <div key={idx} className="skill-chip">
                          <span className="skill-chip-name">{s.name}</span>
                          <span className="skill-chip-level">{s.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="empty-panel">
              <p>No profile data found.</p>
              <p className="muted">Complete onboarding to see your profile and skills.</p>
            </div>
          )}
        </Section>
      </div>

      <style>{`
        .profile-page { padding: 2rem; max-width: 1200px; margin: 0 auto; }

        .profile-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .profile-hero-left { display: flex; align-items: center; gap: 1rem; }
        .profile-hero-icon {
          width: 44px; height: 44px; border-radius: 14px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex; align-items: center; justify-content: center;
          color: white;
        }

        .profile-hero-title { font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin: 0; }
        .profile-hero-sub { color: var(--text-secondary); margin: 0.25rem 0 0; font-size: 0.95rem; }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 980px) {
          .profile-grid { grid-template-columns: 1fr 1fr; }
          .profile-grid > :nth-child(3) { grid-column: 1 / -1; }
        }

        .profile-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .profile-section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .profile-section-title svg { color: var(--color-primary); }
        .profile-section-title h3 { margin: 0; font-size: 1.1rem; font-weight: 800; color: var(--text-primary); }

        .profile-section-body { }

        .empty-panel {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          padding: 1rem;
          color: var(--text-secondary);
        }

        .muted { color: var(--text-muted); margin-top: 0.25rem; font-size: 0.9rem; }

        .cv-list { display: flex; flex-direction: column; gap: 0.75rem; }

        .cv-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.95rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
          background: rgba(255, 255, 255, 0.02);
        }

        .cv-meta { display: flex; align-items: center; gap: 0.8rem; min-width: 0; }

        .cv-icon {
          width: 38px; height: 38px; border-radius: 14px;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex; align-items: center; justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .cv-text { min-width: 0; }
        .cv-name { font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cv-sub { color: var(--text-muted); font-size: 0.85rem; margin-top: 0.15rem; }

        .cv-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .cv-download.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .other-info { display: flex; flex-direction: column; gap: 0.75rem; }
        .other-info-row { display: flex; gap: 1rem; justify-content: space-between; }
        .other-label { color: var(--text-muted); font-weight: 600; }
        .other-value { color: var(--text-primary); font-weight: 700; text-align: right; max-width: 65%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .other-divider { height: 1px; background: var(--border-glass); margin: 0.5rem 0; }

        .skills-mini-title { font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary); }
        .skills-mini-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.5rem; }
        .skill-chip { background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 0.6rem; display: flex; justify-content: space-between; gap: 0.5rem; }
        .skill-chip-name { color: var(--text-primary); font-weight: 700; font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .skill-chip-level { color: var(--color-primary); font-weight: 900; font-size: 0.85rem; }
      `}</style>
    </div>
  );
};

export default Profile;

