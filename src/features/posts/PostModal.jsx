import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const PostModal = ({ isOpen, onClose, post }) => {
  if (!post) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="ease-in duration-150"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
        >
          <Dialog.Panel className="bg-white max-w-xl w-full p-6 rounded-lg shadow-xl z-50 relative">
            <Dialog.Title className="text-xl font-bold mb-2">{post.title}</Dialog.Title>
            <div className="text-sm text-gray-600 mb-4">By: {post.author.username}</div>
            <p className="mb-4">{post.content}</p>

            {/* Optional: Display metadata */}
            <div className="text-xs text-gray-400">
              <p>Reported Reason: {post.reportedReason}</p>
              <p>Submitted: {new Date(post.reportedAt).toLocaleString()}</p>
              <p>Status: {post.status}</p>
            </div>

            <button
              className="mt-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={onClose}
            >
              Close
            </button>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default PostModal;
