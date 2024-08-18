'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useForm, SubmitHandler } from 'react-hook-form';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Celular',
    description: '+55 (18) 99819-0820',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'andrielscript@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Endereço',
    description: 'Parapuã Centro, Rua Fortaleza 1011',
  },
];

interface FormData {
  preventDefault: any;
  name: string;
  email: string;
  message: string;
  phone?: number;
  tel?: number;
  service: string;
}

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch('https://getform.io/f/bkkgpodb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Error. Tente novamente!');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:h-[54%]">
            <form
              target="_blank"
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
              // action="https://getform.io/f/bkkgpodb"
              // action="https://formsubmit.co/e7f5342050ead176735ea11937b324b6"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-4xl text-[#00FFAB]">
                Estou ansioso para colaborar com você!
              </h3>
              <p className="text-white/60">
                Vamos conversar sobre como posso ajudar a transformar seus dados
                em valor!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  placeholder="Digite o Nome Completo"
                  {...register('name', {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-600">
                    {errors.name.type === 'required' &&
                      'Este campo é necessário.'}
                    {errors.name.type === 'maxLength' &&
                      'O comprimento máximo é 100 char.'}
                  </p>
                )}
                <Input
                  type="email"
                  placeholder="Digite o E-mail"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-600">
                    {errors.email.type === 'required' &&
                      'Este campo é necessário.'}
                    {errors.email.type === 'pattern' && 'Email Inválido.'}
                  </p>
                )}
                <Input
                  type="phone"
                  placeholder="Celular (Opcional)"
                  {...register('phone')}
                />
                <Input
                  type="tel"
                  placeholder="Telefone (Opcional)"
                  {...register('tel')}
                />
              </div>

              {/* MESSAGE */}
              <Textarea
                className="h-[200px]"
                placeholder="Escreva sua mensagem aqui"
                {...register('message', {
                  required: 'Este campo é necessário.',
                  maxLength: {
                    value: 2000,
                    message: 'O comprimento máximo é 2000 char.',
                  },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-600">{errors.message.message}</p>
              )}
              {/* Button */}
              <Button
                type="submit"
                size="md"
                // disabled={(!isDirty, !isValid)}
                className="max-w-40"
              >
                Enviar
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent2 xl:h-[72px] xl:w-[72px]">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contato;
