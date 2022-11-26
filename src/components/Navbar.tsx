import { ArrowRightOnRectangleIcon, Bars2Icon } from '@heroicons/react/24/outline';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import supabase from '../utils/supabase';
import { useUser } from '../utils/useUser';
import Text from './ui/typography/Text';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { email, fullName, onboarded } = useUser({ redirect: '/login' });

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const toggleMenu = () => {
    //
  };

  return (
    <div className='fixed top-0 left-0 right-0 w-full flex justify-between items-center py-4 px-8 bg-white z-40 border-b border-b-gray-200'>
      <div className='flex items-center'>
        <div className='w-8 h-8 flex justify-center items-center cursor-pointer mr-8' onClick={toggleMenu}>
          <Bars2Icon className='w-5 h-5 text-gray-500' />
        </div>
        <Link to='/'>
          <img src='/colang-logo.svg' alt='' width={90} />
        </Link>
      </div>
      <div className='flex items-center'>
        <Text size='text-sm' color='text-slate-700'>{onboarded ? fullName : email}</Text>
        <div className='w-8 h-8 flex justify-center items-center cursor-pointer ml-8' onClick={signOut}>
          <ArrowRightOnRectangleIcon className='w-5 h-5 text-gray-500' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;