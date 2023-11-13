import { createRoot } from 'react-dom/client'

import { Home } from './scr/views/Home'

const root = createRoot(document.getElementById('app'))

root.render(<Home />)