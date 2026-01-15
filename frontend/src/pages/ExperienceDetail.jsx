import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { experiences } from '../data/experiences'
import './ExperienceDetail.css'

function ExperienceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const experience = experiences.find(exp => exp.id === id)

  if (!experience) {
    return (
      <div className="experience-detail">
        <div className="container">
          <div className="not-found">
            <h2>체험을 찾을 수 없습니다</h2>
            <button onClick={() => navigate(-1)} className="back-btn">
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="experience-detail">
      <div className="hero-section">
        <div className="flag">{experience.flagEmoji}</div>
        <h1 className="hero-title">{experience.name}</h1>
      </div>

      <div className="container">
        <div className="detail-content">
          <div className="category-badge">{experience.category}</div>

          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">⏱️</span>
              <div>
                <div className="info-label">소요시간</div>
                <div className="info-value">{experience.duration}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎯</span>
              <div>
                <div className="info-label">난이도</div>
                <div className="info-value">{experience.difficulty}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">👥</span>
              <div>
                <div className="info-label">권장연령</div>
                <div className="info-value">{experience.recommendedAge}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💰</span>
              <div>
                <div className="info-label">참가비</div>
                <div className="info-value">{experience.price.toLocaleString()}원</div>
              </div>
            </div>
          </div>

          <div className="description-section">
            <h3>체험 소개</h3>
            <p>{experience.description}</p>
            <div className="tags">
              {experience.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary">체험 신청하기</button>
            <button className="btn btn-outline">🤍 찜하기</button>
          </div>

          <button onClick={() => navigate(-1)} className="back-btn">
            ← 목록으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExperienceDetail
