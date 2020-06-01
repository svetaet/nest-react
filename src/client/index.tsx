import { hot } from 'react-hot-loader/root'
import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'

import { DEV_MODE } from 'common/constants'
import { App } from 'ui/App'
import { ThemeProvider } from 'ui/Theme'
import { root } from 'root'

const Root = DEV_MODE ? hot(App) : App
render(
	<ThemeProvider>
		<Root />
	</ThemeProvider>,
	root,
)
