'use client';

import { useState, FormEvent } from 'react';

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });

    const formData = new FormData(e.currentTarget);

    try {
      // Google Apps Script Web App に送信
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('送信先が設定されていません');
      }

      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject') || '（件名なし）',
        message: formData.get('message'),
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // no-cors モードでは response.ok が常に false になるため、
      // エラーがなければ成功とみなす
      setFormState({
        status: 'success',
        message: 'お問い合わせを受け付けました。ありがとうございます！',
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormState({
        status: 'error',
        message: '送信に失敗しました。時間をおいて再度お試しください。',
      });
    }
  };

  if (formState.status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-green-700 text-xl font-bold mb-2">送信完了</h3>
        <p className="text-green-600">{formState.message}</p>
        <button
          onClick={() => setFormState({ status: 'idle', message: '' })}
          className="mt-6 text-green-600 hover:text-green-700 font-medium"
        >
          新しいお問い合わせを送る
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formState.status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
          {formState.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          件名
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
          placeholder="お問い合わせの件名"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <button
        type="submit"
        disabled={formState.status === 'submitting'}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {formState.status === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            送信中...
          </span>
        ) : (
          '送信する'
        )}
      </button>

      <p className="text-gray-500 text-xs text-center">
        * は必須項目です
      </p>
    </form>
  );
}
