'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Card_D from '@/components/card_dashboard';
import Loading from '@/components/Loading';
import useUserDetails from '@/hooks/useUserDetails';
import Icon from '@/components/ui/Icon';

const Ecommerce = () => {
  const { user, details, loading } = useUserDetails();
  const [locked, setLocked] = useState({
    availStartupIndiaCertificate: true,
    gstCertificate: true, // Example: GST Certificate is locked by default
    intellectualProperty: true,
    virtualOfficeSupport: true,
    capTableManagement: true,
    diyPitchDeck: true,
    financialInsights: true,
    connectWithIncubators: true,
    debtFundraising: true,
    equityFundraising: true,
    ma: true,
    valuateMyBusiness: true,
    investmentBankingSupport: true,
    fundraisingSecondaryShares: true,
    contractsAndAgreements: true,
    reviewMyTermsheet: true,
    reviewMySHA: true,
    globalDealflow: true,
    valuateStartup: true,
    createSyndicate: true,
    joinSyndicate: true,
    followInvestment: true,
    sellShares: true,
    exitStrategy: true,
    dueDiligenceSupport: true,
    shaSupport: true,
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {details?.type === 'startup' && (
        <div className='grid grid-cols-12 gap-5'>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12'>
            <Card title='Investment Readiness'>
              <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
                <div className='col-span-2 grid md:grid-cols-2 grid-cols-2 gap-5'>
                  <Card_D
                    title='Avail SIC (Startup India Certificate)'
                    text='download'
                    href='/profile'
                    isLocked={locked.availStartupIndiaCertificate}
                    icon='heroicons:check-badge'
                  />
                  <Card_D
                    title='GST Certificate'
                    text='download'
                    href='/profile'
                    isLocked={locked.gstCertificate}
                    icon='heroicons:document-text'
                  />
                  <Card_D
                    title='Intellectual Property'
                    text='Learn More'
                    href='/profile'
                    isLocked={locked.intellectualProperty}
                    icon='heroicons:light-bulb'
                  />
                  <Card_D
                    title='Virtual Office Support'
                    text='Learn More'
                    href='/profile'
                    isLocked={locked.virtualOfficeSupport}
                    icon='heroicons:computer-desktop'
                  />
                </div>
                <Card_D
                  title='CapTable Management'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.capTableManagement}
                  icon='heroicons:table-cells'
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12 gap-5'>
            <Card>
              <Card_D
                title='DIY Pitch Deck'
                text='Learn More'
                href='/profile'
                isLocked={locked.diyPitchDeck}
                icon='heroicons:presentation-chart-bar'
              />
              <Card_D
                title='Financial Insights'
                text='Learn More'
                href='/profile'
                isLocked={locked.financialInsights}
                icon='heroicons:arrow-trending-up'
              />
              <Card_D
                title='Connect with Incubators'
                text='Learn More'
                href='/profile'
                isLocked={locked.connectWithIncubators}
                icon='heroicons:building-office-2'
              />
            </Card>
          </div>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12 gap-5'>
            <Card title='Fundraising'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                <Card_D
                  title='Debt Fundraising'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.debtFundraising}
                  icon='heroicons:currency-rupee'
                />
                <Card_D
                  title='Equity Fundraising'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.equityFundraising}
                  icon='heroicons:currency-rupee'
                />
                <Card_D
                  title='M&A'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.ma}
                  icon='heroicons:document-text'
                />
                <Card_D
                  title='Valuate My Business'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.valuateMyBusiness}
                  icon='heroicons:scale'
                />
                <Card_D
                  title='Investment Banking Support'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.investmentBankingSupport}
                  icon='heroicons:building-library'
                />
                <Card_D
                  title='Fundraising through Secondary Shares'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.fundraisingSecondaryShares}
                  icon='heroicons:document-text'
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12'>
            <Card title='Legal Help Desk'>
              <Card_D
                title='Contracts and Agreements'
                text='Learn More'
                href='/profile'
                isLocked={locked.contractsAndAgreements}
                icon='heroicons:document-text'
              />
              <Card_D
                title='Review my Termsheet'
                text='Learn More'
                href='/profile'
                isLocked={locked.reviewMyTermsheet}
                icon='heroicons:document-magnifying-glass'
              />
              <Card_D
                title='Review my SHA'
                text='Learn More'
                href='/profile'
                isLocked={locked.reviewMySHA}
                icon='heroicons:document-magnifying-glass'
              />
            </Card>
          </div>
        </div>
      )}
      {details?.type === 'investor' && (
        <div className='grid grid-cols-12 gap-5'>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12'>
            <Card>
              <div className='grid md:grid-cols-1 grid-cols-1 gap-5'>
                <Card_D
                  title='Global Dealflow'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.globalDealflow}
                  icon='heroicons:document-text'
                />
                <Card_D
                  title='Valuate a Startup'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.valuateStartup}
                  icon='heroicons:scale'
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12 gap-5'>
            <Card title='Syndicate'>
              <Card_D
                title='Create a Syndicate'
                text='Learn More'
                href='/profile'
                isLocked={locked.createSyndicate}
                icon='heroicons:plus-circle'
              />
              <Card_D
                title='Join a Syndicate'
                text='Learn More'
                href='/profile'
                isLocked={locked.joinSyndicate}
                icon='heroicons:user-group'
              />
            </Card>
          </div>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12 gap-5'>
            <Card title='Portfolio Management'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                <Card_D
                  title='Follow your Investment'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.followInvestment}
                  icon='heroicons:presentation-chart-line'
                />
                <Card_D
                  title='Sell my Shares (Secondary Shares)'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.sellShares}
                  icon='heroicons:document-text'
                />
                <Card_D
                  title='Exit Strategy'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.exitStrategy}
                  icon='heroicons:document-text'
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12'>
            <Card title='Post Term Sheet' titleClass='text-center'>
              <Card_D
                title='Valuate a Startup'
                text='Learn More'
                href='/profile'
                isLocked={locked.valuateStartup}
                icon='heroicons:scale'
              />
              <Card_D
                title='Due-Diligence Support'
                text='Learn More'
                href='/profile'
                isLocked={locked.dueDiligenceSupport}
                icon='heroicons:clipboard-document-check'
              />
              <Card_D
                title='SHA Support'
                text='Learn More'
                href='/profile'
                isLocked={locked.shaSupport}
                icon='heroicons:clipboard-document-check'
              />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
