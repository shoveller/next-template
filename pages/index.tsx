import { NextPageContext } from 'next'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { includeDefaultNamespaces } from 'utils/i18n'

interface ILanguageForm {
  i18n: 'ko' | 'en'
}

const LanguageForm = () => {
  const { handleSubmit, register } = useForm()
  const { i18n } = useTranslation()
  const onSubmit = (form: ILanguageForm) => {
    return i18n.changeLanguage(form.i18n)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="ko">한국어</label>
      <input
        type="radio"
        id="ko"
        name="i18n"
        ref={register}
        defaultChecked={true}
        value="ko"
      />
      <label htmlFor="en">영어</label>
      <input type="radio" id="en" name="i18n" ref={register} value="en" />
      <button>변경</button>
    </form>
  )
}

const EnvTest = () => {
  const title = `${process.env.NEXT_PUBLIC_TEST_ENV}`

  return <>{title}</>
}

const TranslateTest = () => {
  const { t } = useTranslation()

  return <> {t('common.hello')}</>
}

const Index = () => {
  return (
    <>
      <div className="container">
        <main>
          <h1 className="title">
            <TranslateTest />
            <EnvTest />
            <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <LanguageForm />

          <p className="description">
            Get started by editing <code>pages/index.tsx</code>
          </p>

          <button
            onClick={() => {
              window.alert('With typescript and Jest')
            }}
          >
            Test Button
          </button>

          <div className="grid">
            <a href="https://nextjs.org/docs" className="card">
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className="card">
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="card"
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="card"
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default Index

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Index.getInitialProps = async (ctx: NextPageContext) => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  }
}
