import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-quicksale-bg flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm bg-quicksale-card rounded-2xl shadow-2xl p-8 md:p-10 animate-fadeInUp">
        <LoginForm />
      </div>
    </div>
  );
}
