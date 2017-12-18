import React from 'react'

const AppIntro = () => {
  return [
    <h2 key={1}>Rate Spread Calculator</h2>,
    <p key={2}>
      The rate spread calculator generates the spread between the Annual
      Percentage Rate (APR) and a survey-based estimate of APRs currently
      offered on prime mortgage loans of a comparable type utilizing the
      “Average Prime Offer Rates” fixed table or adjustable table, action taken,
      amortization type, lock-in date, APR, fixed term (loan maturity) or
      variable term (initial fixed-rate period), and reverse mortgage.
    </p>,
    <p key={3}>
      To ensure the most accurate result based on regulatory requirements for
      reporting rate spread, please use this rate spread calculator for loans
      with a final action taken on or after January 1st, 2018, and use the old
      rate spread calculator for loans with a final action taken date prior to
      January 1st, 2018. Data requirements for the rate spread calculator are
      provided in accordance with Regulation C effective January 1st, 2018.
    </p>
  ]
}

export default AppIntro
