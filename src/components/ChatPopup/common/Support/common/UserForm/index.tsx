import React from 'react';

// components
import Input from '@/components/Input';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';

// packages
import { useForm } from 'react-hook-form';

// types
import { UserFormProps } from './types';

const formData = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your full name',
    error: 'Please enter your full name',
  },
  {
    name: 'email',
    label: 'Email address',
    placeholder: 'Enter your email address',
    error: 'Please enter your email address',
    type: 'email',
  },
  {
    name: 'customer',
    label: 'Are you a customer?',
    dropDownItems: [
      {
        value: 'customer',
        label: 'Customer',
      },
      {
        value: 'company',
        label: 'Company',
      },
      {
        value: 'visitor',
        label: 'Visitor',
      },
    ],
  },
  {
    name: 'message',
    label: 'Message',
    placeholder: 'Ask a question here...',
    error: 'Please enter your message',
  },
];

const UserForm = ({ onSkip }: UserFormProps) => {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserCreate = (data: any) => {
    console.log({ data });
    reset();
  };

  return (
    <div className='rounded-lg shadow-main p-6'>
      <form
        onSubmit={handleSubmit((data) => handleUserCreate(data))}
        className='flex flex-col'
      >
        <p className='mb-6 text-neutral-900'>
          Enter your information below and our team will contact you shortly.
        </p>
        {formData.map((formItem) => {
          if (formItem.dropDownItems) {
            return (
              <Dropdown
                key={formItem.name}
                control={control}
                name={formItem.name}
                label={formItem.label}
                errorMessage={errors?.[formItem.name]?.message}
                hasError={Boolean(errors?.[formItem.name])}
                dropDownItems={formItem.dropDownItems}
                defaultItem={formItem.dropDownItems[0]}
              />
            );
          } else {
            return (
              <Input
                key={formItem.name}
                name={formItem.name}
                label={formItem.label}
                placeholder={formItem.placeholder}
                hasError={Boolean(errors[formItem.name])}
                errorMessage={errors.error}
                register={register}
                type={formItem.type || 'text'}
              />
            );
          }
        })}
        <div className='flex flex-row justify-between gap-4 mt-2'>
          <Button
            title='Skip'
            buttonType='outline'
            size='small'
            containerStyles='flex-1'
            titleStyles='text-s'
            onClick={onSkip}
          />
          <Button
            title='Send'
            size='small'
            type='submit'
            containerStyles='flex-1'
            titleStyles='text-s'
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
