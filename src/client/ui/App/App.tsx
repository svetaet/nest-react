import React, { useState, useCallback } from 'react'
import clsx from 'clsx'

import { api } from 'api'
import { useTheme } from 'ui/Theme'
import { Button } from 'ui/Button'
import { Switch } from 'ui/Switch'

import s from './App.m.scss'

type StepT = 'still' | 'loading' | 'error' | 'success'

const messageByStep = {
	still: 'Ping server',
	loading: 'Loading...',
	error: 'Ping failed 😓 Retry?',
}

export const App = () => {
	const [step, setStep] = useState<StepT>('still')
	const [response, setResponse] = useState<string>('')

	const pingServer = useCallback(async () => {
		setStep('loading')
		const response = await api.ping({ text: 'Required body' })

		if (response !== undefined) {
			setStep('success')
			setResponse(response.text)
		} else setStep('error')
	}, [])

	const { theme, switchTheme } = useTheme()

	return (
		<div className={clsx(s.App, theme)}>
			<div className={s.AppCenter}>
				<Button
					text={step === 'success' ? response : messageByStep[step]}
					onClick={pingServer}
					disabled={step === 'loading'}
				/>
			</div>
			<div className={s.ThemeSwitch}>
				<p>Dark theme</p>
				<Switch value={theme === 'dark'} onToggle={switchTheme} />
			</div>
			<p className={s.BottomLine}>UI design was copied from NieR:Automata</p>
		</div>
	)
}
