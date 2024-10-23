import { Fragment } from 'react'

//components
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

//icons
import { EllipsisVerticalIcon, TrashIcon, PencilIcon } from '@heroicons/react/20/solid'

function MessageOptionsDropdown() {
  const onMessageDelete = () => {}

  return (
    <div className='absolute right-full top-1/2 -translate-y-1/2 z-10'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <MenuButton className='flex justify-center items-center w-8 h-8 rounded-full hover:bg-black/40'>
            <EllipsisVerticalIcon className='h-5 w-5' />
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <MenuItems className='absolute left-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg z-[100]'>
            <div className='px-1 py-1'>
              <MenuItem>
                <>
                  <button
                    onClick={onMessageDelete}
                    className={`bg-black/30 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-700`}
                  >
                    <PencilIcon className='w-4 h-4 mr-2' />
                    Edit
                  </button>
                  <button
                    onClick={onMessageDelete}
                    className={`bg-black/30 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-700`}
                  >
                    <TrashIcon className='w-4 h-4 mr-2' />
                    Delete
                  </button>
                </>
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default MessageOptionsDropdown
