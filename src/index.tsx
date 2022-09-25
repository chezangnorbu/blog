import React from 'react';
import {unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {history} from 'libs/history';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import { BlogPage } from 'pages/BlogPage/BlogPage';
import { ContactPage } from 'pages/ContactPage/ContactPage';

ReactDOM.render(
  <HistoryRouter history={history}>
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={<Navigate replace to="/about" />} />
    </Routes>
  </HistoryRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
