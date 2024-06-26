'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Textinput from '@/components/ui/Textinput';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { investorSignupSchema } from '@/lib/schema/investorSchema';
import { insertInvestorSignupData } from '@/lib/actions/investorActions';
import { supabase } from '@/lib/supabaseclient'; // Import Supabase client

const InvestorSignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const profileId = searchParams.get('profile_id'); // Get profile_id from URL query

  useEffect(() => {
    if (!profileId) {
      router.push('/'); // Redirect if profileId is not available
    } else {
      // Check if the form has already been filled
      const checkFormFilled = async () => {
        const { data: investorDetails, error: investorError } = await supabase
          .from('investor_signup')
          .select('*')
          .eq('profile_id', profileId)
          .single();

        if (investorDetails) {
          router.push('/profile');
        } else if (investorError) {
          console.error('Error fetching investor details:', investorError);
        }
      };

      checkFormFilled();

      // Fetch profile data
      const fetchProfileData = async () => {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('name, email, mobile')
          .eq('id', profileId)
          .single();
        if (error) {
          console.error('Error fetching profile data:', error);
        } else {
          setInitialValues({
            name: profile.name,
            email: profile.email,
            mobile: profile.mobile,
          });
        }
      };

      fetchProfileData();
    }
  }, [profileId, router]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(investorSignupSchema),
    mode: 'all',
    defaultValues: initialValues,
  });

  useEffect(() => {
    setValue('name', initialValues.name);
    setValue('email', initialValues.email);
    setValue('mobile', initialValues.mobile);
  }, [initialValues, setValue]);

  const onSubmit = async (data) => {
    if (!profileId) {
      console.error('Profile ID is missing');
      return;
    }
    const formData = { ...data, profile_id: profileId }; // Include profile_id in the form data
    console.log('Form Data:', formData);
    setIsLoading(true);
    try {
      await insertInvestorSignupData(formData);
      console.log('Investor signup data saved successfully');
      router.push('/profile'); // Redirect after successful signup
    } catch (error) {
      console.error('Error saving investor signup data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card title='Investor Signup'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10'>
            <div className='lg:col-span-3 md:col-span-2 col-span-1'>
              <h4 className='text-base text-slate-800 dark:text-slate-300 my-6'>
                Enter Your Information
              </h4>
            </div>
            <Textinput
              label='Name'
              type='text'
              placeholder='Name'
              name='name'
              error={errors.name}
              register={register}
            />
            <Textinput
              label='Email'
              type='email'
              placeholder='Email'
              name='email'
              error={errors.email}
              register={register}
            />
            <Textinput
              label='Mobile'
              type='text'
              placeholder='Mobile'
              name='mobile'
              error={errors.mobile}
              register={register}
            />
            <Select
              label='Are you a'
              name='usertype'
              options={[
                { value: 'VC', label: 'VC' },
                { value: 'Angel Fund', label: 'Angel Fund' },
                { value: 'Angel Investor', label: 'Angel Investor' },
                { value: 'Syndicate', label: 'Syndicate' },
              ]}
              error={errors.type}
              register={register}
            />
            <Textarea
              label='Investment Thesis'
              placeholder='Investment Thesis'
              name='investmentThesis'
              error={errors.investmentThesis}
              register={register}
            />
            <Textinput
              label='Cheque Size'
              type='text'
              placeholder='Cheque Size'
              name='chequeSize'
              error={errors.chequeSize}
              register={register}
            />
            <Select
              label='Sectors you are interested in'
              name='sectors'
              options={[
                { value: 'Technology', label: 'Technology' },
                { value: 'Healthcare', label: 'Healthcare' },
                { value: 'Finance', label: 'Finance' },
                { value: 'Consumer Goods', label: 'Consumer Goods' },
                // Add more sectors as needed
              ]}
              error={errors.sectors}
              register={register}
            />
            <Select
              label='Stage you invest in'
              name='investmentStage'
              options={[
                { value: 'Pre Seed', label: 'Pre Seed' },
                { value: 'Seed', label: 'Seed' },
                { value: 'Pre-Series', label: 'Pre-Series' },
                { value: 'Series A', label: 'Series A' },
                { value: 'Series B', label: 'Series B' },
                { value: 'Series C & Beyond', label: 'Series C & Beyond' },
              ]}
              error={errors.investmentStage}
              register={register}
            />
          </div>

          <div className='text-right mt-10'>
            <Button
              text={isLoading ? 'Submitting...' : 'Submit'}
              className={`btn-dark ${isLoading ? 'loading' : ''}`}
              type='submit'
              disabled={isLoading}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default InvestorSignupForm;
