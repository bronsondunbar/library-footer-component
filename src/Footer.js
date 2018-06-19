import React, { Fragment } from 'react'
import classNames from 'classnames'

import './style.css'

const FooterComponent = ({ footerData, footerSocial, footerTheme, footerCopyright, footerYear, footerAlignment, footerColumns, footerLeftColumnAlignment, footerRightColumnAlignment }) => {

  let footerClass = classNames ({
    footer: true,
    'footer-bg-light': footerTheme == 'light' || footerTheme == null,
    'footer-bg-dark': footerTheme == 'dark',
    'footer-align-center': footerAlignment == 'center' && footerLeftColumnAlignment == null && footerRightColumnAlignment == null,
    'footer-align-left': footerAlignment == 'left' && footerLeftColumnAlignment == null && footerRightColumnAlignment == null,
    'footer-align-right': footerAlignment == 'right' && footerLeftColumnAlignment == null && footerRightColumnAlignment == null,
    'footer-left-align-center': footerLeftColumnAlignment == 'center' && footerAlignment == null,
    'footer-left-align-left': footerLeftColumnAlignment == 'left' && footerAlignment == null,
    'footer-left-align-right': footerLeftColumnAlignment == 'right' && footerAlignment == null,
    'footer-right-align-center': footerRightColumnAlignment == 'center' && footerAlignment == null,
    'footer-right-align-left': footerRightColumnAlignment == 'left' && footerAlignment == null,
    'footer-right-align-right': footerRightColumnAlignment == 'right' && footerAlignment == null,
    'footer-1x1': footerColumns == '1',
    'footer-2x2': footerColumns == '2',
  })

  let footerGridStyle = {
    'margin': footerCopyright != null || footerYear != null ? '15px 0 0 0' : null

  }

  const data = footerData.map((data, index) => {
    return (
      <li><a href={data.route}>{data.name}</a></li>
    )
  })

  let social = null

  footerSocial != null
    ? social = footerSocial.map((data, index) => {
        return (
          <li><a href={data.route}><i className={data.icon}></i></a></li>
        )
      })
    : null

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className={footerClass}>
      <div className="grid" style={footerGridStyle}>
        <div className="item">
          <div>
            <ul>
              {data}
            </ul>
          </div>
        </div>

        {social != null
          ? <div className="item">
              <div>
                <ul>
                  {social}
                </ul>
              </div>
            </div>
          : null
        }
      </div>

      {(footerCopyright != null && footerYear == true) &&
        <p>&copy; {currentYear} {footerCopyright}</p>
      }

      {footerCopyright != null &&
        <p>&copy; {footerCopyright}</p>
      }

      {footerYear == true &&
        <p>&copy; {currentYear}</p>
      }
    </footer>
  )
  
}