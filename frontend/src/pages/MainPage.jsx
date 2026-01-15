import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { experiences } from '../data/experiences'
import './MainPage.css'

function MainPage({ domestic = false, global = false }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredExperiences = experiences.filter(exp => {
    const matchesSearch = exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exp.description.toLowerCase().includes(searchQuery.toLowerCase())

    // 국내만 보기
    if (domestic) {
      return matchesSearch && exp.country === 'Korea'
    }

    // 국외만 보기
    if (global) {
      return matchesSearch && exp.country !== 'Korea'
    }

    // 전체 보기 (기본값)
    return matchesSearch
  })

  return (
    <div className="main-page">
      <div className="title-section">
        <div className="container">
          <h2 className="page-title">
            {domestic ? 'KOREAN CULTURAL EXPERIENCES' : global ? 'GLOBAL DISCOVERY EXPERIENCES' : 'ALL CULTURAL EXPERIENCES'}
          </h2>
          <p className="page-subtitle">
            {domestic ? '한국의 문화를 체험하세요' : global ? '세계 문화를 체험하세요' : '전 세계 문화를 체험하세요'}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by region or activity"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="experience-grid">
          {filteredExperiences.map(exp => (
            <Link to={`/experience/${exp.id}`} key={exp.id} className="experience-card">
              <div className="card-image">
                <div className="flag-badge">{exp.flagEmoji}</div>
                <div className="placeholder-image">{exp.country}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{exp.name}</h3>
                <p className="card-category">{exp.category}</p>
                <div className="card-info">
                  <span className="info-item">⏱️ {exp.duration}</span>
                  <span className="info-item">🎯 {exp.difficulty}</span>
                </div>
                <div className="card-footer">
                  <span className="price">{exp.price.toLocaleString()}원</span>
                  <button className="favorite-btn" onClick={(e) => e.preventDefault()}>
                    🤍
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="empty-state">
            <p>검색 결과가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainPage
